// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })
  describe('md.addClass()', function() {
    it('should add a CSS class', function() {
      md.addClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.true
    })
  })
  describe('md.one()', function() {
    it('should select the first element with a given name', function() {
      expect(md.one('span').innerHTML).to.equal('Toggle navigation')
    })
  })
  describe('md.all()', function() {
    it('should select all elements with a given name', function() {
      expect(md.all('div').length).to.be.equal(14)
    })
  })
  describe('md.remove()', function() {
    it('should remove an element', function() {
      md.remove('h4')
      expect(document.querySelectorAll('h4').length).to.be.equal(3)
      // expect(md.all('h4')[3]).to.not.exist
    })
  })
  describe('md.removeClass()', function() {
    it('should remove a CSS Class', function() {
      md.removeClass('span','sr-only')
      expect(md.one('span').classList.contains('sr-only')).to.be.false
    })
  })
  describe('md.hasClass()', function() {
    it('should say whether or not an element has a certain CSS Class', function() {
      expect(md.hasClass('body', 'test')).to.be.true
    })
  })
  describe('md.getAttr()', function() {
    it('should return width of image tag as 200', function() {
      expect(md.getAttr('img', 'width')).to.equal('200')
    })
  })
  describe('md.setAttr()', function() {
    it('should set img width to 500', function() {
      md.setAttr('img', 'width', '500')
      expect(md.getAttr('img', 'width')).to.equal('500')
    })
  })
  describe('md.setHTML()', function() {
    it('should set the innerHTML of div to be BATMAN', function() {
      md.setHTML('div','BATMAN')
      expect(md.one('div').innerHTML).to.be.equal('BATMAN')
    })
  })
  describe('md.getHTML()', function() {
    it('should get the innerHTML of an element', function() {
      expect(md.getHTML('div')).to.be.equal('BATMAN')
    })
  })
  describe('md.flipPage()', function() {
    it('should flip the page upside down', function() {
        md.flipPage()
        expect(document.body.style.transform).to.equal('rotate(180deg)')
    })
})
})
