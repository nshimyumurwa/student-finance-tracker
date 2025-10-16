document.getElementById("runRegex").addEventListener("click", () => {
  const raw = document.getElementById("pattern").value.trim();
  const text = document.getElementById("testText").value;
  const out = document.getElementById("regexResult");
  try {
    if (!raw) { out.textContent = 'Type a pattern'; out.style.color='orange'; return; }
    let pattern = raw;
    let flags = 'g';
    if (pattern.startsWith('/') && pattern.lastIndexOf('/') > 0) {
      const last = pattern.lastIndexOf('/');
      flags = pattern.slice(last+1) || flags;
      pattern = pattern.slice(1,last);
      if (!flags.includes('g')) flags = flags + 'g';
    }
    const re = new RegExp(pattern, flags);
    const matches = text.match(re);
    if (matches && matches.length) {
      out.textContent = `✅ Matches: ${matches.join(', ')}`;
      out.style.color = 'green';
    } else {
      out.textContent = '❌ No matches';
      out.style.color = 'red';
    }
  } catch (err) {
    out.textContent = '⚠️ Invalid regex: ' + err.message;
    out.style.color = 'orange';
  }
});