<script>
document.addEventListener("DOMContentLoaded", function() {
  const targetElement = document.querySelector('#nested-dropdown .vc_toggle_content')
  if (targetElement) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://speakmpls-widgets.vercel.app/embed/newroot2";
    iframe.style.width = "100%";
    iframe.style.minHeight = "100vh";
    iframe.style.maxHeight = "none";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    targetElement.appendChild(iframe);
  } else {
    console.error("Element with id 'nested-dropdown' not found.");
  }
});

</script>
