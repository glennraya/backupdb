;<Card>
    <CardHeader>
        <CardTitle>Upload a file</CardTitle>
    </CardHeader>
    <CardContent>
        {fileName === '' && (
            <>
                <input
                    className="hidden"
                    type="file"
                    accept=".jpg, .png"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileChange}
                />
            </>
        )}
        <div
            className="flex h-auto w-full cursor-pointer items-center justify-center rounded-xl border border-gray-300 bg-gray-100 py-8 text-sm"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
            <span>{fileName !== '' ? `${fileName}` : 'Browse file'}</span>
        </div>
        {!isUploading && file !== null && (
            <Button className="mt-2 w-full" onClick={onFileUpload}>
                Upload
            </Button>
        )}
        <div className="progress-bar mt-2 flex w-full items-center gap-6">
            {isUploading && (
                <span className="w-1/12 text-xs font-bold">
                    {uploadPercentage}%
                </span>
            )}
            {isUploading && (
                <div className="w-11/12">
                    <div
                        className="h-2 w-full rounded-sm bg-blue-500 transition-all duration-500 ease-in-out"
                        style={{
                            width: `${uploadPercentage}%`
                        }}
                    ></div>
                </div>
            )}
        </div>
    </CardContent>
</Card>
