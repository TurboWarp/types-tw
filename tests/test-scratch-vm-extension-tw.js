(function(Scratch) {
  'use strict';

  class Fetch {
    /** @returns {Scratch.Info} */
    getInfo () {
      return {
        id: 'fetch',
        name: 'Fetch',
        blocks: [
          {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'GET [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
            }
          }
        ]
      };
    }

    /**
     * @param {{URL: string;}} args
     */
    get (args) {
      return Scratch.fetch(Scratch.Cast.toString(args.URL))
        .then(r => r.text())
        .catch(() => '');
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);

(function(Scratch) {
  'use strict';
  class Test {
    getInfo () {
      return {
        id: 'testbutton',
        name: 'test 123',
        docsURI: 'https://extensions.turbowarp.org',
        blocks: [
          {
            blockType: Scratch.BlockType.BUTTON,
            func: 'MAKE_A_VARIABLE',
            text: 'Make variable'
          },
          {
            blockType: Scratch.BlockType.BUTTON,
            text: ':)',
            func: 'hello'
          }
        ]
      };
    }
    async hello () {
      Scratch.canOpenWindow('https://example.com/').then((allowed) => {
        if (allowed === true) {
          // ...
        }
      });
      if ((await Scratch.canNotify()) === true) {
        // ...
      }
      alert('>:]');
    }
  }
  Scratch.extensions.register(new Test());
})(Scratch);

(function(Scratch) {
  'use strict';
  class Test {
    getInfo() {
      return {
        id: 'testlabel',
        name: 'Label',
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'test 123 :) <>&%"'
          },
          {
            blockType: Scratch.BlockType.COMMAND,
            text: 'do something [SOUND] [COSTUME]',
            opcode: 'test',
            arguments: {
              SOUND: {
                type: Scratch.ArgumentType.SOUND
              },
              COSTUME: {
                type: Scratch.ArgumentType.COSTUME
              }
            }
          }
        ]
      };
    }
    test () {

    }
  }
  Scratch.extensions.register(new Test());
})(Scratch);

let list = [1, 2, 3, 4, 5];
let index1 = Scratch.Cast.toListIndex(2, list.length, false);
if (index1 !== 'INVALID') {
  list[index1];
}
let index2 = Scratch.Cast.toListIndex(2, list.length, true);
if (index2 !== 'INVALID') {
  // @ts-expect-error
  list[index2];
  if (index2 !== 'ALL') {
    list[index2];
  }
}
let index3 = Scratch.Cast.toListIndex(2, list.length, Math.random() > 0.5);
if (index3 !== 'INVALID') {
  // @ts-expect-error
  list[index3];
  if (index3 !== 'ALL') {
    list[index3];
  }
}

if (typeof scaffolding !== 'undefined') {
  // ...
}

Scratch.fetch('https://example.com', {
  headers: {
    'Content-Type': 'application/json'
  }
});

Scratch.gui.getBlockly().then((ScratchBlocks) => {
  ScratchBlocks.getMainWorkspace()?.blockDB_;
  ScratchBlocks.Workspace;
});
Scratch.gui.getBlocklyEagerly().then((ScratchBlocks) => {
  ScratchBlocks.getMainWorkspace()?.blockDB_;
  ScratchBlocks.Workspace;
});
