const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const checkAndRemove = (element) => {
          if (element.textContent?.trim() === 'Reels') {
            console.log('Match found:', element)
            const parent = element.closest('.x6ikm8r.x10wlt62')

            if (parent) {
              parent.remove()
              console.log('Reels Card Removed:', parent)
            }
          }
        }

        checkAndRemove(node)

        // Check all child nodes recursively
        node.querySelectorAll('*').forEach((child) => checkAndRemove(child))
      }
    })
  })
})

observer.observe(document.body, { childList: true, subtree: true })
