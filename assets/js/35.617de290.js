(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{495:function(e,o,t){e.exports=t.p+"assets/img/base-efi.4dff73e0.png"},496:function(e,o,t){e.exports=t.p+"assets/img/clean-efi.5f36d3ad.png"},497:function(e,o,t){e.exports=t.p+"assets/img/populated-efi.bfd59122.png"},588:function(e,o,t){"use strict";t.r(o);var r=t(25),i=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"adding-the-base-opencore-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-base-opencore-files"}},[e._v("#")]),e._v(" Adding The Base OpenCore Files")]),e._v(" "),r("ul",[r("li",[e._v("Supported version: 0.6.0")])]),e._v(" "),r("p",[e._v("To setup OpenCore’s folder structure, you’ll want to grab the EFI folder found in "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg's releases"),r("OutboundLink")],1),e._v(". Regarding DEBUG versus RELEASE version:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("DEBUG")]),e._v(": Can greatly help with debugging boot issues, however can add some noticeable delay to boot times. Once installed you can easily transition to RELEASE")]),e._v(" "),r("li",[r("strong",[e._v("RELEASE")]),e._v(": Much snappier boot times, however virtually no useful DEBUG info is provided in OpenCore making troubleshooting much more difficult.")])]),e._v(" "),r("p",[e._v("And once downloaded, place the EFI folder(from OpenCorePkg) on the root of your EFI partition.")]),e._v(" "),r("p",[r("strong",[e._v("Note")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("Windows users: This will already be done on the "),r("code",[e._v("BOOT")]),e._v(" USB drive created by MakeInstall")]),e._v(" "),r("li",[e._v("Linux users: This is the "),r("code",[e._v("OPENCORE")]),e._v(" partition we created earlier\n"),r("ul",[r("li",[e._v("Note that Method 1 only creates 1 partition, while Method 2 creates 2 partitions")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:t(495),alt:"base EFI folder"}})]),e._v(" "),r("p",[e._v("Now something you'll notice is that it comes with a bunch of files in "),r("code",[e._v("Drivers")]),e._v(" and "),r("code",[e._v("Tools")]),e._v(" folder, we don't want most of these:")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Remove from Drivers:")])]),e._v(" "),r("ul",[r("li",[e._v("AudioDxe.efi\n"),r("ul",[r("li",[e._v("Unrelated to Audio support in macOS")])])]),e._v(" "),r("li",[e._v("CrScreenshotDxe.efi\n"),r("ul",[r("li",[e._v("Used for taking screenshots in UEFI, not needed by us")])])]),e._v(" "),r("li",[e._v("OpenUsbKbDxe.efi\n"),r("ul",[r("li",[e._v("Used for OpenCore picker on "),r("strong",[e._v("legacy systems running DuetPkg")]),e._v(", "),r("a",{attrs:{href:"https://applelife.ru/threads/opencore-obsuzhdenie-i-ustanovka.2944066/page-176#post-856653",target:"_blank",rel:"noopener noreferrer"}},[e._v("not recommended and even harmful on Ivy Bridge and newer"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("UsbMouseDxe.efi\n"),r("ul",[r("li",[e._v("similar idea to OpenUsbKbDxe, should only be needed on legacy systems using DuetPkg")])])]),e._v(" "),r("li",[e._v("NvmExpressDxe.efi\n"),r("ul",[r("li",[e._v("Used for Haswell and older when no NVMe driver is built into the firmware")])])]),e._v(" "),r("li",[e._v("XhciDxe.efi\n"),r("ul",[r("li",[e._v("Used for Sandy Bridge and older when no XHCI driver is built into the firmware")])])]),e._v(" "),r("li",[e._v("HiiDatabase.efi\n"),r("ul",[r("li",[e._v("Used for fixing GUI support like OpenShell.efi on Sandy Bridge and older")])])]),e._v(" "),r("li",[e._v("OpenCanopy.efi\n"),r("ul",[r("li",[e._v("This is OpenCore's optional GUI, we'll be going over how to set this up in "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Post Install"),r("OutboundLink")],1),e._v(" so remove this for now")])])]),e._v(" "),r("li",[e._v("Ps2KeyboardDxe.efi + Ps2MouseDxe.efi\n"),r("ul",[r("li",[e._v("Pretty obvious when you need this, USB keyboard and mouse users don't need it")]),e._v(" "),r("li",[e._v("Reminder: PS2 ≠ USB")])])])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Remove everything from Tools:")])]),e._v(" "),r("ul",[r("li",[e._v("Way to many to list them all, but I recommend keeping OpenShell.efi for troubleshooting purposes")])])])]),e._v(" "),r("p",[e._v("A cleaned up EFI:")]),e._v(" "),r("p",[r("img",{attrs:{src:t(496),alt:"Clean EFI"}})]),e._v(" "),r("p",[e._v("Now you can place "),r("strong",[e._v("your")]),e._v(" necessary firmware drivers(.efi) into the "),r("em",[e._v("Drivers")]),e._v(" folder and Kexts/ACPI into their respective folders. Please note that UEFI drivers from Clover are not supported with OpenCore!(EmuVariableUEFI, AptioMemoryFix, OsxAptioFixDrv, etc). Please see the "),r("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/clover-conversion/clover-efi.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clover firmware driver conversion"),r("OutboundLink")],1),e._v(" for more info on supported drivers and those merged into OpenCore.")]),e._v(" "),r("p",[e._v("Here's what a populated EFI "),r("em",[r("strong",[e._v("can")])]),e._v(" look like (yours will be different):")]),e._v(" "),r("p",[r("img",{attrs:{src:t(497),alt:"Populated EFI folder"}})]),e._v(" "),r("p",[r("strong",[e._v("Reminder")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("SSDTs and custom DSDTs("),r("code",[e._v(".aml")]),e._v(") go in ACPI folder")]),e._v(" "),r("li",[e._v("Kexts("),r("code",[e._v(".kext")]),e._v(") go in Kexts folder")]),e._v(" "),r("li",[e._v("Firmware drivers("),r("code",[e._v(".efi")]),e._v(") go in the Drivers folder")])]),e._v(" "),r("h1",{attrs:{id:"now-with-all-this-done-head-to-gathering-files-to-get-the-needed-kexts-and-firmware-drivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-this-done-head-to-gathering-files-to-get-the-needed-kexts-and-firmware-drivers"}},[e._v("#")]),e._v(" Now with all this done, head to "),r("RouterLink",{attrs:{to:"/ktext.html"}},[e._v("Gathering Files")]),e._v(" to get the needed kexts and firmware drivers")],1)])}),[],!1,null,null,null);o.default=i.exports}}]);