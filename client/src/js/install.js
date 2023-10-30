const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeInstallPrompt` event
window.addEventListener('beforeInstallPrompt', (event) => {
  // Save the event and show the install button
  event.preventDefault();
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again
  deferredPrompt.prompt = null;
});

// TODO: Add an handler for the `appInstalled` event
window.addEventListener('appInstalled', (event) => {
  // Log install success
  console.log('App was installed');
});