import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div class="copy-right-area" id='contact'>
            <div class="container">
                <div class="copy-right-content">
                    <p>
                        Copyright @<script>
                            document.write(new Date().getFullYear())
                        </script>
                        2022. Created By 
                        <a href="https://iktiarsaputra.github.io/" target="_blank"  rel='noreferrer'>
                            &nbsp;Muhammad Ikctiar Saputra
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
