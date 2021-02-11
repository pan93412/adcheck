/**
 * AdBlock Checker
 *
 * @author GoneTone & pan93412
 * @version 1.0.0
 * @date 2021-02-11
 */

/**
 * Check whether the user enables the adblocker.
 *
 * @return Does the user enable it?
 */
async function adcheck() {
  try {
    const req = await fetch(
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      {
        method: "HEAD",
        mode: "no-cors",
      }
    );

    if (req.ok) return true;
  } catch (_) {}

  return false;
}
