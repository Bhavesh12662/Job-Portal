import { X } from 'lucide-react'; import type { PropsWithChildren } from 'react';
export function Badge({children,tone='slate'}:PropsWithChildren<{tone?:'slate'|'blue'|'green'|'amber'|'red'}>){return <span className={`badge ${tone}`}>{children}</span>}
export function Modal({open,onClose,title,children}:PropsWithChildren<{open:boolean;onClose:()=>void;title:string}>){if(!open)return null;return <div className="overlay" onMouseDown={onClose}><section className="modal" onMouseDown={e=>e.stopPropagation()}><button className="icon-btn close" onClick={onClose}><X size={18}/></button><h2>{title}</h2>{children}</section></div>}
export function EmptyState({title,body}:{title:string;body:string}){return <div className="empty"><div className="empty-icon">⌁</div><h3>{title}</h3><p>{body}</p></div>}
