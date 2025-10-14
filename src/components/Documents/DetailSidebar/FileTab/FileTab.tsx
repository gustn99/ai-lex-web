import { useState } from 'react';

import AddFileButton from './AddFileButton';
import FileFilter from './FileFilter';
import FileList from './FileList';

export default function FileTab() {
	const [searchKeyword, setSearchKeyword] = useState('');

	return (
		<div className="grid h-full min-h-0 grid-rows-[auto_1fr] gap-3 pb-20">
			<FileFilter searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
			<FileList />
			<AddFileButton />
		</div>
	);
}
