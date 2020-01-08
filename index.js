
function vulnerable() {
  console.log('do something dubious');
  return 1;
}

function utility() {
  return vulnerable();
}

module.exports = {
  utility
};