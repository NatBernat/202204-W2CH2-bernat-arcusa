function strictEquals(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return false;
  } else if (a == 0 && b == -0) {
    return true;
  } else if (a == -0 && b == 0) {
    return true;
  } else if (a == "0" && b == 0) {
    return false;
  } else if (a == 0 && b == "0") {
    return false;
  } else if (a == "0" && b == -0) {
    return false;
  } else if (a == -0 && b == "0") {
    return false;
  } else {
    return Object.is(a, b);
  }
}
