console.log('app is alive');

function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName);
    document.getElementById('channelName').innerHtml = channelName;
}