describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el) {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider is changed', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function($el) {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of the <audio> element changed when the slider changed', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image & Sound changes when party horn clicked', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image goes from 2 bars to 3 bars when the volume level goes from 66 to 67', () => {
    cy.get('#volume-slider').invoke('val', 66).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Volume image goes from 1 bar to 2 bars when the volume level goes from 33 to 34', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider').invoke('val', 34).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });
    
  it('Volume image goes from mute to 1 bar when the volume level goes from 0 to 1', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
    cy.get('#volume-slider').invoke('val', 1).trigger('input');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Honk button should be disabled now that text input is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(function($el) {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Honk button should be disabled now that text input is a non-number', () => {
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then(function($el) {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error message displayed when input is outside range', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('input:invalid').then(function($el) {
      expect($el).to.exist;
    });
  });
});
