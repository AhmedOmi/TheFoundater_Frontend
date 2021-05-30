import React, { useEffect } from 'react';
import './style.css';
const Disqus = () => {
  useEffect(() => {
    const DISQUS_SCRIPT = 'disq_script'
    const sd = document.getElementById(DISQUS_SCRIPT)
    if (!sd) {
      var disqus_config = function() {
        
      }

      const d = document
      const s = d.createElement('script')
      s.src = 'https://thefoundater-1.disqus.com/embed.js' // REPLACE THIS LINE WITH YOUR DISQUS LINE
      s.id = DISQUS_SCRIPT
      s.async = true
      s.setAttribute('data-timestamp', +new Date())

      d.body.appendChild(s)
    } else {
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      })
    }
  }, [])
  return <div className="disqus" id="disqus_thread"></div>
}

export default Disqus;
