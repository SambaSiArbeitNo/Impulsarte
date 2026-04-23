function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function toggleDesignButton (){
    const pinkcard = document.querySelector('.pinkcard')
    if(pinkcard.style.backgroundColor === '#808080')
    {
        pinkcard.style.backgroundColor = '#E92C93'
    }
        else if (pinkcard.style.backgroundColor === '#E92C93')
    {
        pinkcard.style.backgroundColor = '#808080'
    }
}