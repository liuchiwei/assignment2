// 監聽所有錨點的點擊事件
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // 取得目標區段的ID
        const targetElement = document.getElementById(targetId); // 找到目標區段元素

        if (targetElement) {
            // 使用scrollIntoView()實現平滑滾動
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});