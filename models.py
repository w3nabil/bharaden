import re

# Sanitising text to avoid sql injection and/or xss 
def text_purify(text: str) -> str:
    return re.sub(r"[^a-zA-Z0-9 \-]", "", text).strip()

# Convert Float Value 
def fnum(value):
    try:
        return float(value) if value else 0
    except (ValueError, TypeError):
        return 0
