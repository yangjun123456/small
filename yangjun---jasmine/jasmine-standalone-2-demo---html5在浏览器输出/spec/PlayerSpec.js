describe("Player", function () {
  var player;
  var song;

  //beforeEach 在describe函数中每个Spec执行之前执行,suite内每走一次it会调用一次
  beforeEach(function () {
    player = new Player();
    song = new Song();
    console.log('beforeEach');
    console.log(jasmine);
  });

  //beforeAll()：在describe函数中所有的Specs执行之前执行，但只执行一次，在Sepc之间并不会被执行。
  beforeAll(function () {
    console.log('beforeAll');
  });

  // beforeEach 在describe函数中每个Spec执行之前执行
  afterEach(function () {
    console.log('afterEach');
  });

  // afterAll()： 在describe函数中所有的Specs执行之后执行，但只执行一次，在Sepc之间并不会被执行。
  afterAll(function () {
    console.log('afterAll');
  });

  it("should be able to play a Song", function () {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
    console.log('should be able to play a Song');
  });

  describe("when song has been paused", function () {
    beforeEach(function () {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function () {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function () {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });



  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function () {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function () {
    it("should throw an exception if song is already playing", function () {
      player.play(song);

      expect(function () {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});

// xdescribe表示禁用当前Suites集
xdescribe("A spec", function () {
  var foo;

  beforeEach(function () {
    foo = 0;
    foo += 1;
    console.log('beforEach', 'A spec');

  });

  afterEach(function () {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function () {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function () {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });

  describe("nested inside a second describe", function () {
    var bar;

    beforeEach(function () {
      bar = 1;
    });

    it("can reference both scopes as needed", function () {
      console.log(foo, bar);

      expect(foo).toEqual(bar);
    });
  });
});

// pending状态挂起Specs
describe("Pending specs", function () {

  // 挂起状态写法1 xit
  xit("can be declared 'xit'", function () {
    expect(false).toBe(false);
  });

  // 挂起状态写法2------没有函数体
  it("can be declared with 'it' but without a function");

  // 挂起状态写法3，调用了pending函数
  it("can be declared by calling 'pending' in the spec body", function () {
    expect(false).toBe(false);
    pending('this is why it is pending');
  });
});

