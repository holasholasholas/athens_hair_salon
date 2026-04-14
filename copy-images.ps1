$src = "C:\Users\nicho\.gemini\antigravity\brain\b5bd8f7c-38be-4239-b9fe-67710653edc2"
$dst = "C:\Users\nicho\Desktop\Website Work\Athens_Salon\athens-salon\public"
Copy-Item "$src\salon_interior_1776142485126.png" "$dst\salon_interior.png" -Force
Copy-Item "$src\gallery_balayage_1776142501866.png" "$dst\gallery_balayage.png" -Force
Copy-Item "$src\gallery_color_treatment_1776142528331.png" "$dst\gallery_color.png" -Force
Copy-Item "$src\gallery_cut_1776142546304.png" "$dst\gallery_cut.png" -Force
Copy-Item "$src\gallery_tools_1776142563798.png" "$dst\gallery_tools.png" -Force
Copy-Item "$src\gallery_reception_1776142599869.png" "$dst\gallery_reception.png" -Force
Copy-Item "$src\hero_background_1776142616971.png" "$dst\hero_bg.png" -Force
Write-Host "All images copied!"
