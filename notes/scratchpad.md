<iframe src="https://speakmpls-widgets.vercel.app/embed/newroot/" style="width: 50vw; min-height: 100vh; max-height: none; height: 100%; border: none;"></iframe>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const targetElement = document.getElementById("nested-dropdown");
  if (targetElement) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://speakmpls-widgets.vercel.app/embed/newroot/";
    iframe.style.width = "50vw";
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
