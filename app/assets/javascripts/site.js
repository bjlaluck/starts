$(document).on('turbolinks:load', function(){
  $('.rating').raty({
  starHalf: '<%= asset_path 'star-half.png' %>',
  starOff: '<%= asset_path 'star-off.png' %>',
  starOn: '<%= asset_path 'star-on.png' %>'
  });
});
