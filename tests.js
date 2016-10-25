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
      md.one('span')
      expect(md.one('span').innerHTML).to.equal('Toggle navigation')
    })
  })
  describe('md.all()', function() {
    it('should select all elements with a given name', function() {
      md.all('div')
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
      md.hasClass('ul','nav')
      expect(md.one('ul').classList.contains('nav')).to.be.true
    })
  })
  describe('md.getAttr()', function() {
    it('should get an HTML attribute of an element', function() {
      md.getAttr('input','placeholder')
      expect(md.one('input').placeholder).to.be.equal('Search...')
      // md.getAttr('button','class')
      // expect(md.one('button').classList[1]).to.be.equal('collapsed')
    })
  })
  describe('md.setAttr()', function() {
    it('should set an HTML attribute of an element', function() {
      md.setAttr('input','placeholder','HOLLA')
      expect(md.one('input').placeholder).to.be.equal('HOLLA')
      // md.setAttr('button','type','batman')
      // expect(md.one('button').type).to.be.equal('batman')
    })
  })
  describe('md.setHTML()', function() {
    it('should set the innerHTML of an element', function() {
      md.setHTML('div','BATMAN')
      expect(md.one('div').innerHTML).to.be.equal('BATMAN')
    })
  })
  describe('md.getHTML()', function() {
    it('should get the innerHTML of an element', function() {
      md.getHTML('div')
      expect(md.one('div').innerHTML).to.be.equal('BATMAN')
    })
  })
  describe('md.flipPage()', function() {
    it('should flip the page upside down', function() {
        md.flipPage()
        expect(document.body.style.transform).to.equal('rotate(180deg)')
    })
})
})
