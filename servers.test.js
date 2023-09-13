describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it ('it should reset html in #serverTable', function () {
    updateServerTable ();
    expect (serverTbody.innerHTML).toEqual('');
  });
  
  
  it('should NOT add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
