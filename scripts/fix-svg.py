with open('public/og-image.svg', 'r') as f:
    content = f.read()

# The search string has literal & character (hex 26)
# The replace string should have & (5 chars: &, a, m, p, ;)
search = 'Full-Stack Engineer & System Architect'
replace = 'Full-Stack Engineer & System Architect'

print(f"Search: {repr(search)}")
print(f"Search hex: {search.encode().hex()}")
print(f"Replace: {repr(replace)}")
print(f"Replace hex: {replace.encode().hex()}")

content = content.replace(search, replace)

with open('public/og-image.svg', 'w') as f:
    f.write(content)

print('done')