#!/usr/bin/env python3
import re

# Read the file
with open('/src/imports/Schools-1-6301.tsx', 'r') as f:
    content = f.read()

# Remove all instances of font-['Inter:Medium',sans-serif] font-medium
content = content.replace("font-['Inter:Medium',sans-serif] font-medium ", "")

# Write back
with open('/src/imports/Schools-1-6301.tsx', 'w') as f:
    f.write(content)

print("Fixed all font-medium instances")
