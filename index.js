var traverse = require('traverse');

exports.stringify = function(obj) {
  var first = true;
  var s = "";
  traverse(obj).forEach(function to_s (node) {
    if(typeof node === 'object') {
      this.post(function(child) {
        if(!child.isLast && child.level > 1) {
          s += ",";
        }
      });
      if(Object.keys(node).length == 1) {
        this.before(function() {
          var key = Object.keys(node)[0];
          s += key;
        });
      } else {
      this.before(function(child, x) {
        if(first) {
          s+= "#";
          first = false;
        } else {
          s += "{"
        }
      });
      this.pre(function(x, key) {
        to_s(key);
        if(x != "" && this.level >= 1) {
          s += "=";
        }
      });
      this.after(function() {
        s += '}';
      });
      }
    } else if(typeof node === 'string') {
      s += node;
    } else {
      s += node.toString();
    }
  });
  return s;
}