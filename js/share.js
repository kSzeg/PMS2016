$(function() {
  $("#show-bill").on('click', function() {
      var d = new Date();
      var timestamp = d.getTime();
      window.open("https://www.facebook.com/dialog/share_open_graph?app_id=1444353782558436&display=popup&action_type=og.likes&action_properties=%7B%22object%22%3A%22http%3A%2F%2Fwww.primeministersimulator2016.com%2F"+timestamp+"%22%7D&redirect_uri=https%3A%2F%2Fwww.primeministersimulator2016.com", "_blank");
  });
});