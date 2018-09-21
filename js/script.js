console.log('app is alive');


function switchChannel(channelName) {
    switch_Channel(channelName);
    filled2unfilled();
}
function switch_Channel(channelName) {
    console.log('Tuning into channel ' + channelName);
    document.getElementById('channelName').innerHTML = channelName;
    document.getElementById('location').innerHTML = '<a href="http://w3w.co/upgrading.never.helps" target="_blank" class="fixLink"><strong>upgrading.never.helps</strong></a>';
}

function filled2unfilled() {
    $('#appBarStar').attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
}

function unfilled2filled() {
    $('#appBarStar').attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
    
}

function toggleEmojis() {
    $('#emojis').toggle();
}

function selectTab(tabId) {
    $('#New').removeClass('selected');
    $('#Trending').removeClass('selected');
    $('#Favorites').removeClass('selected');
    $(tabId).addClass('selected');
    console.log('Changing to tab ' + tabId);
}