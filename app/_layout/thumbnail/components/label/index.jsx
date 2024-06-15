/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailLabel({ children }) {
  return (
    <div
      style={{
        paddingInlineStart: 'clamp(2.5em, 8vw, 8em)',
      }}
    >
      <h5 className='me-2 inline-flex overflow-hidden text-xl'>{children}</h5>
    </div>
  );
}
