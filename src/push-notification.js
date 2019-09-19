const pushServerPublicKey = "BIN2Jc5Vmkmy-S3AUrcMlpKxJpLeVRAfu9WBqUbJ70SJOCWGCGXKY-Xzyh7HDr6KbRDGYHjqZ06OcS3BjD7uAm8";

export function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

export function registerServiceWorker() {
    return navigator.serviceWorker.register("/sw.js");
}

export async function askUserPermission() {
    return await Notification.requestPermission();
}

export async function createNotificationSubscription() {
    const serviceWorker = await navigator.serviceWorker.ready;
    return await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: pushServerPublicKey
    });
}