import React, { useRef, useEffect } from 'react';
import './canvascss.css';

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Animation variables
        let animationId;
        let time = 0;
        
        // Mana symbols and mystical elements
        const manaSymbols = [];
        const particles = [];
        const runicCircles = [];
        
        // Initialize mana symbols (floating around)
        for (let i = 0; i < 8; i++) {
            manaSymbols.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: 12 + Math.random() * 8,
                type: Math.floor(Math.random() * 5), // 5 different mana types
                speed: 0.3 + Math.random() * 0.7,
                angle: Math.random() * Math.PI * 2,
                pulse: Math.random() * Math.PI * 2
            });
        }
        
        // Initialize mystical particles
        for (let i = 0; i < 25; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: 1 + Math.random() * 3,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: 0.3 + Math.random() * 0.7,
                color: ['#4a90e2', '#9b59b6', '#e74c3c', '#f39c12', '#2ecc71'][Math.floor(Math.random() * 5)]
            });
        }
        
        // Initialize runic circles
        for (let i = 0; i < 3; i++) {
            runicCircles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: 50 + Math.random() * 100,
                rotation: 0,
                rotationSpeed: 0.005 + Math.random() * 0.01,
                opacity: 0.1 + Math.random() * 0.2
            });
        }
        
        // Draw mana symbol
        const drawManaSymbol = (ctx, x, y, size, type, pulse) => {
            ctx.save();
            ctx.translate(x, y);
            
            const colors = ['#4a90e2', '#9b59b6', '#e74c3c', '#f39c12', '#2ecc71'];
            const pulseFactor = 1 + Math.sin(pulse) * 0.2;
            
            ctx.fillStyle = colors[type];
            ctx.globalAlpha = 0.6 + Math.sin(pulse) * 0.3;
            
            // Different symbols for different mana types
            switch(type) {
                case 0: // Blue - circle with waves
                    ctx.beginPath();
                    ctx.arc(0, 0, size * pulseFactor, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.strokeStyle = colors[type];
                    ctx.lineWidth = 2;
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        ctx.arc(0, 0, (size - 3 - i * 3) * pulseFactor, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                    break;
                case 1: // Purple - diamond
                    ctx.beginPath();
                    ctx.moveTo(0, -size * pulseFactor);
                    ctx.lineTo(size * pulseFactor, 0);
                    ctx.lineTo(0, size * pulseFactor);
                    ctx.lineTo(-size * pulseFactor, 0);
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 2: // Red - flame-like triangle
                    ctx.beginPath();
                    ctx.moveTo(0, -size * pulseFactor);
                    ctx.lineTo(size * 0.8 * pulseFactor, size * 0.6 * pulseFactor);
                    ctx.lineTo(-size * 0.8 * pulseFactor, size * 0.6 * pulseFactor);
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 3: // Yellow - star
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const angle = (i * Math.PI) / 3;
                        const x = Math.cos(angle) * size * pulseFactor;
                        const y = Math.sin(angle) * size * pulseFactor;
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 4: // Green - leaf-like shape
                    ctx.beginPath();
                    ctx.ellipse(0, 0, size * pulseFactor, size * 1.5 * pulseFactor, 0, 0, Math.PI * 2);
                    ctx.fill();
                    break;
            }
            
            ctx.restore();
        };
        
        // Draw runic circle
        const drawRunicCircle = (ctx, x, y, radius, rotation, opacity) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = '#666';
            ctx.lineWidth = 1;
            
            // Outer circle
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2);
            ctx.stroke();
            
            // Inner geometric patterns
            for (let i = 0; i < 8; i++) {
                const angle = (i * Math.PI) / 4;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(angle) * radius * 0.8, Math.sin(angle) * radius * 0.8);
                ctx.stroke();
            }
            
            // Inner circle
            ctx.beginPath();
            ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.restore();
        };
        
        // Animation loop
        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 20, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            time += 0.016;
            
            // Update and draw mana symbols
            manaSymbols.forEach(symbol => {
                symbol.x += Math.cos(symbol.angle) * symbol.speed;
                symbol.y += Math.sin(symbol.angle) * symbol.speed;
                symbol.pulse += 0.05;
                
                // Wrap around screen
                if (symbol.x < -20) symbol.x = canvas.width + 20;
                if (symbol.x > canvas.width + 20) symbol.x = -20;
                if (symbol.y < -20) symbol.y = canvas.height + 20;
                if (symbol.y > canvas.height + 20) symbol.y = -20;
                
                drawManaSymbol(ctx, symbol.x, symbol.y, symbol.size, symbol.type, symbol.pulse);
            });
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Wrap around screen
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                ctx.save();
                ctx.globalAlpha = particle.opacity;
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });
            
            // Update and draw runic circles
            runicCircles.forEach(circle => {
                circle.rotation += circle.rotationSpeed;
                drawRunicCircle(ctx, circle.x, circle.y, circle.radius, circle.rotation, circle.opacity);
            });
            
            animationId = requestAnimationFrame(animate);
        };
        
        // Start with a dark mystical background
        ctx.fillStyle = 'rgba(5, 5, 15, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        animate();
        
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return (
        <div className="canvas-container">
            <canvas ref={canvasRef} id="canvas"></canvas>
        </div>
    );
};

export default Canvas;