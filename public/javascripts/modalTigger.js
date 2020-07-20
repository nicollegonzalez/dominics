/**
 * @class
 *
 */
class Modal extends Component {
  /**
   * Construct Modal instance and set up overlay
   */
  constructor(el, options) {
    /**
     * Options for the modal
     */

    /**
     * Describes open/close state of modal
     * 
     */
    
  }

  

  /**
   * Get Instance
   */


  /**
   * Teardown component
   */


  /**
   * Setup Event Handlers
   */
  _setupEventHandlers() {
    this._handleOverlayClickBound = this._handleOverlayClick.bind(this);
    this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this);

    if (Modal._count === 1) {
      document.body.addEventListener('click', this._handleTriggerClick);
    }
    this.$overlay[0].addEventListener('click', this._handleOverlayClickBound);
    this.el.addEventListener('click', this._handleModalCloseClickBound);
  }

  /**
   * Remove Event Handlers
   */
  _removeEventHandlers() {
    if (Modal._count === 0) {
      document.body.removeEventListener('click', this._handleTriggerClick);
    }
    this.$overlay[0].removeEventListener('click', this._handleOverlayClickBound);
    this.el.removeEventListener('click', this._handleModalCloseClickBound);
  }

  /**
   * Handle Trigger Click
   * 
   */
  _handleTriggerClick(e) {
    let $trigger = $(e.target).closest('.modal-trigger');
    if ($trigger.length) {
      let modalId = M.getIdFromTrigger($trigger[0]);
      let modalInstance = document.getElementById(modalId).M_Modal;
      if (modalInstance) {
        modalInstance.open($trigger);
      }
      e.preventDefault();
    }
  }

  /**
   * Handle Overlay Click
   */
  _handleOverlayClick() {
    if (this.options.dismissible) {
      this.close();
    }
  }

  /**
   * Handle Modal Close Click
   * @param {Event} e
   */
  _handleModalCloseClick(e) {
    let $closeTrigger = $(e.target).closest('.modal-close');
    if ($closeTrigger.length) {
      this.close();
    }
  }

  /**
   * Handle Keydown
   * @param {Event} e
   */
  _handleKeydown(e) {
    // ESC key
    if (e.keyCode === 27 && this.options.dismissible) {
      this.close();
    }
  }

  /**
   * Handle Focus
   * @param {Event} e
   */
  _handleFocus(e) {
    // Only trap focus if this modal is the last model opened (prevents loops in nested modals).
    if (!this.el.contains(e.target) && this._nthModalOpened === Modal._modalsOpen) {
      this.el.focus();
    }
  }

  /**
   * Animate in modal
   */
  _animateIn() {
    // Set initial styles
    $.extend(this.el.style, {
      display: 'block',
      opacity: 0
    });
    $.extend(this.$overlay[0].style, {
      display: 'block',
      opacity: 0
    });

    // Animate overlay
    anim({
      targets: this.$overlay[0],
      opacity: this.options.opacity,
      duration: this.options.inDuration,
      easing: 'easeOutQuad'
    });

    // Define modal animation options
    let enterAnimOptions = {
      targets: this.el,
      duration: this.options.inDuration,
      easing: 'easeOutCubic',
      // Handle modal onOpenEnd callback
      complete: () => {
        if (typeof this.options.onOpenEnd === 'function') {
          this.options.onOpenEnd.call(this, this.el, this._openingTrigger);
        }
      }
    };

    // Bottom sheet animation
    if (this.el.classList.contains('bottom-sheet')) {
      $.extend(enterAnimOptions, {
        bottom: 0,
        opacity: 1
      });
      anim(enterAnimOptions);

      // Normal modal animation
    } else {
      $.extend(enterAnimOptions, {
        top: [this.options.startingTop, this.options.endingTop],
        opacity: 1,
        scaleX: [0.8, 1],
        scaleY: [0.8, 1]
      });
      anim(enterAnimOptions);
    }
  }

  /**
   * Animate out modal
   */
  _animateOut() {
    // Animate overlay
    anim({
      targets: this.$overlay[0],
      opacity: 0,
      duration: this.options.outDuration,
      easing: 'easeOutQuart'
    });

    // Define modal animation options
    let exitAnimOptions = {
      targets: this.el,
      duration: this.options.outDuration,
      easing: 'easeOutCubic',
      // Handle modal ready callback
      complete: () => {
        this.el.style.display = 'none';
        this.$overlay.remove();

        // Call onCloseEnd callback
        if (typeof this.options.onCloseEnd === 'function') {
          this.options.onCloseEnd.call(this, this.el);
        }
      }
    };

    // Bottom sheet animation
    if (this.el.classList.contains('bottom-sheet')) {
      $.extend(exitAnimOptions, {
        bottom: '-100%',
        opacity: 0
      });
      anim(exitAnimOptions);

      // Normal modal animation
    } else {
      $.extend(exitAnimOptions, {
        top: [this.options.endingTop, this.options.startingTop],
        opacity: 0,
        scaleX: 0.8,
        scaleY: 0.8
      });
      anim(exitAnimOptions);
    }
  }

  /**
   * Open Modal
   * @param {cash} [$trigger]
   */
  open($trigger) {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;
    Modal._modalsOpen++;
    this._nthModalOpened = Modal._modalsOpen;

    // Set Z-Index based on number of currently open modals
    this.$overlay[0].style.zIndex = 1000 + Modal._modalsOpen * 2;
    this.el.style.zIndex = 1000 + Modal._modalsOpen * 2 + 1;

    // Set opening trigger, undefined indicates modal was opened by javascript
    this._openingTrigger = !!$trigger ? $trigger[0] : undefined;

    // onOpenStart callback
    if (typeof this.options.onOpenStart === 'function') {
      this.options.onOpenStart.call(this, this.el, this._openingTrigger);
    }

    if (this.options.preventScrolling) {
      document.body.style.overflow = 'hidden';
    }

    this.el.classList.add('open');
    this.el.insertAdjacentElement('afterend', this.$overlay[0]);

    if (this.options.dismissible) {
      this._handleKeydownBound = this._handleKeydown.bind(this);
      this._handleFocusBound = this._handleFocus.bind(this);
      document.addEventListener('keydown', this._handleKeydownBound);
      document.addEventListener('focus', this._handleFocusBound, true);
    }

    anim.remove(this.el);
    anim.remove(this.$overlay[0]);
    this._animateIn();

    // Focus modal
    this.el.focus();

    return this;
  }

  /**
   * Close Modal
   */
  close() {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;
    Modal._modalsOpen--;
    this._nthModalOpened = 0;

    // Call onCloseStart callback
    if (typeof this.options.onCloseStart === 'function') {
      this.options.onCloseStart.call(this, this.el);
    }

    this.el.classList.remove('open');

    // Enable body scrolling only if there are no more modals open.
    if (Modal._modalsOpen === 0) {
      document.body.style.overflow = '';
    }

    if (this.options.dismissible) {
      document.removeEventListener('keydown', this._handleKeydownBound);
      document.removeEventListener('focus', this._handleFocusBound, true);
    }

    anim.remove(this.el);
    anim.remove(this.$overlay[0]);
    this._animateOut();
    return this;
  }
}

