
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
         $('[data-toggle="popover"]').popover();
      })
      $('.carousel').carousel({
  interval: 2000
});
      $('#contactoBtn').on('hidden.bs.modal', function (e) {
  console.log('el modal se esta ejecutando');
  $('#contactoBtn').removeClass('btn-info');
  $('#contactoBtn').addClass('btn-danger');
  $('#contactoBtn').prop('disable',true);

});
  