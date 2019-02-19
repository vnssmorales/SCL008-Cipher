describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
    });
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "uvwxyzabcdefghijklmnopqrst" para "abcdefghijklmnopqrstuvwxyz" con offset 20', ()=>{
      assert.equal(cipher.encode(20, "abcdefghijklmnopqrstuvwxyz"),"uvwxyzabcdefghijklmnopqrst");
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "mnopqrstuvcwxyzabcdefghijkl" para "abcdefghijqklmnopqrstuvwxyz" con offset 40', ()=>{
      assert.equal(cipher.decode(40,"abcdefghijqklmnopqrstuvwxyz"),"mnopqrstuvcwxyzabcdefghijkl" );
    });
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "6789:;<=>?" para "0123456789" con offset 6', ()=>{
      assert.equal(cipher.encode(6, "0123456789"),"6789:;<=>?");
    });

  });
  
});
