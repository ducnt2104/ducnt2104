let previousPage = 'menu';

function selectBook(book) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('selected-book').innerText = `Bộ Sách: ${book}`;
    document.getElementById('content').style.display = 'block';
}

function selectGrade(grade) {
    if (grade === '9') {
        alert('Lớp 9 đang cập nhật!');
    } else {
        document.getElementById('content').style.display = 'none';
        document.getElementById('subject').style.display = 'block';
    }
}

function selectSubject(subject) {
    if (subject === '1') {
        alert('Hiển thị chủ đề 1: Phản Ứng Hóa Học');
    } else if (subject === '2') {
        alert('Hiển thị chủ đề 2: Hóa Học Vô Cơ');
    }
}

function goBack() {
    if (document.getElementById('subject').style.display === 'block') {
        document.getElementById('subject').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else if (document.getElementById('content').style.display === 'block') {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('content').style.display = 'none';
    }
}
