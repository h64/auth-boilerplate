document.addEventListener('DOMContentLoaded', function() {
    console.log('script is running')
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});