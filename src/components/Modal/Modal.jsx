import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
let scrollPosition = 0;

export function Modal({largeImageURL, tags, toggleModal}) {
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    disableScroll();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      enableScroll();
    }
  // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
  },[])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = e => {
      if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({ top: scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  };

  const disableScroll = () => {
    scrollPosition = window.scrollY;
    document.body.style.cssText = `
      position: fixed;
      top: -${scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  };

      return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalWindow src={largeImageURL} alt={tags} />
      </Overlay>,
      modalRoot
    );
}