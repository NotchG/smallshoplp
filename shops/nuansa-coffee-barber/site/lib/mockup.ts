// Marks anything that came from a [MOCKUP] line in the brief: <p {...mock(item.mockup)}>.
export function mock(isMockup?: boolean) {
  return isMockup ? { "data-mockup": "" } : {};
}
