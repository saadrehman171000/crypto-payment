import React from 'react';

interface PaymentMethodCardProps {
  icon: string | string[] | React.ComponentType<any>[] | React.ComponentType<any>
  name: string
  subtitle?: string
  onClick?: () => void
}

export function PaymentMethodCard({ icon, name, subtitle, onClick }: PaymentMethodCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#1E2023] rounded-lg p-6 text-center hover:bg-[#1E2023]/80 transition-colors"
    >
      <div className="flex flex-col items-center gap-3">
        {Array.isArray(icon) ? (
          <div className="grid grid-cols-2 gap-2">
            {icon.map((Icon, i) => {
              // If Icon is a component (SVG import)
              if (typeof Icon === 'function') {
                return <Icon key={i} className="w-8 h-8" />
              }
              // If Icon is a string (image path)
              return (
                <img 
                  key={i} 
                  src={Icon as string} 
                  alt="" 
                  className="w-8 h-8" 
                />
              )
            })}
          </div>
        ) : (
          typeof icon === 'function' ? (
            // If icon is a component (SVG import)
            React.createElement(icon as React.ComponentType<{ className: string }>, { className: "w-12 h-12" })
          ) : (
            // If icon is a string (image path)
            <img 
              src={icon as string} 
              alt="" 
              className="w-12 h-12" 
            />
          )
        )}
        <div>
          <div className="font-medium text-white">{name}</div>
          {subtitle && <div className="text-sm text-gray-400 mt-1">{subtitle}</div>}
        </div>
      </div>
    </button>
  )
} 