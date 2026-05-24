export function shortId(prefix = "i") {
  const fragments = [
    prefix,
    Date.now(),
    Math.random().toString(36).substring(2),
  ];
  return fragments.join("-");
}
