// In development, always fetch from the network and do not enable offline support.
// This is because caching would make development more difficult (changes would not
// be reflected on the first load after each change).
self.addEventListener('fetch', () => { });



self.addEventListener('push', function (event) {

    var data = {};
    if (event.data) {
        data = event.data
        console.log(data)
        console.log('message = ' + event.data.message)
    }

    var title = data.title || "Something Has Happened";
    var message = data.message || "Here's something you might want to check out.";
    var icon = "images/example.png";

    var options = {
        body: message,
        icon: icon,
        vibrate: [100, 50, 100],
        data: {
            dateOfArraival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/xmark.png'
            }
        ]
    };
    console.log(options)

   
    event.waitUntil(self.registration.showNotification('Hello world', options));
});