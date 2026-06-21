// Redirect any manually-entered non-root path back to "/"
// Use location.replace() so the redirect does not add a history entry.
(function () {
  try {
    // Normalize path: remove trailing slashes except when it's just "/"
    var pathname = (location.pathname || '/').replace(/\/+$|^$/g, '');
    // If the regex above yields empty string, treat it as root
    if (pathname === '') pathname = '/';

    // Consider / and /index.html as root — do nothing for them
    var isRoot = pathname === '/' || pathname === '/index.html';
    if (!isRoot) {
      // Redirect to clean root. Use replace() to avoid creating a history entry.
      try {
        location.replace('/');
      } catch (e) {
        location.href = '/';
      }
    }
  } catch (err) {
    // Best-effort fallback
    try { location.href = '/'; } catch (e) { /* ignore */ }
  }
})();
