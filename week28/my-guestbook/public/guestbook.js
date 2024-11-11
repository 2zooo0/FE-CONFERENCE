document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach(button => {
        button.addEventListener("click", async (event) => {
            const entryElement = event.target.closest(".entry"); 
            const entryId = entryElement.getAttribute("data-id");

            if (confirm("정말로 삭제하시겠습니까?")) {
                try {
                    const response = await fetch(`/guestbook/${entryId}`, { 
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });

                    if (response.ok) {
                        alert("삭제되었습니다");
                        entryElement.remove();
                    } else {
                        const result = await response.json();
                        alert("삭제 실패: " + result.message);
                    }
                } catch (error) {
                    console.error("삭제 과정에서 에러", error);
                    alert("삭제 중 에러");
                }
            }
        });
    });
});
