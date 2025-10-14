import { useState } from 'react';

import AddFileButton from './AddFileButton';
import FileFilter from './FileFilter';
import FileList from './FileList';

export default function FileTab() {
	const [searchKeyword, setSearchKeyword] = useState('');

	return (
		<div className="h-full space-y-3 overflow-y-scroll pb-15">
			<FileFilter searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
			<FileList />
			<AddFileButton />
		</div>
	);
}
