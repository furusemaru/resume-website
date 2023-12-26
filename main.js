//問い合わせフォームのため

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        this.submit();
    }
});

function validateForm() {
    let valid = true;

    // 名前の入力チェック
    const nameField = document.getElementById('name');
    if (nameField.value.length < 2 || nameField.value.length > 50) {
        nameField.classList.add('is-invalid');
        valid = false;
    } else {
        nameField.classList.remove('is-invalid');
    }

    // メールアドレスの入力チェック
    const emailField = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        emailField.classList.add('is-invalid');
        valid = false;
    } else {
        emailField.classList.remove('is-invalid');
    }

    // お問い合わせ内容の入力チェック
    const messageField = document.getElementById('message');
    if (messageField.value.trim() === '') {
        messageField.classList.add('is-invalid');
        valid = false;
    } else {
        messageField.classList.remove('is-invalid');
    }

    return valid;
}