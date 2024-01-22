const PublicLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-4 dark:bg-[#1f1f1f]">
      {children}
    </div>
  )
}

export default PublicLayout