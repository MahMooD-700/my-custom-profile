


// لما تضغط على .parent يفتح أو يقفل
document.querySelectorAll('.parent').forEach(parent => {
    parent.addEventListener('click', () => {
        parent.classList.toggle('open');
    });
});
