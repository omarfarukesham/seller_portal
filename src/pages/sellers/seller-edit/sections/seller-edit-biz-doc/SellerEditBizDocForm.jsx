import FormUploadContentService from '@/components/form/FormUploadContentService';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import PDFPreview from '@/components/upload/PDFPreview';
import { useDirectUploadContent } from '@/services/content/contentService';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const SellerEditBizDocForm = () => {
  const { getValues } = useFormContext();
  const [binURL, setBinURL] = useState(getValues('bin'));
  const [tinURL, setTINURL] = useState(getValues('tin'));
  const [tradeLicenseURL, setTradeLicenseURL] = useState(
    getValues('tradeLicense'),
  );
  const [rjscURL, setRjscURL] = useState(getValues('rjsc'));

  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        <TableRow>
          <TableHead>BIN</TableHead>
          <TableData>
            {!binURL && (
              <FormUploadContentService
                name='bin'
                type='pdf'
                className='h-48'
                restServiceHook={useDirectUploadContent}
                restData={{ fileType: 'SELLER_DOCUMENT' }}
              />
            )}
            {binURL && (
              <PDFPreview
                url={binURL}
                className='h-48'
                onRemove={() => setBinURL(null)}
              />
            )}
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>TIN</TableHead>
          <TableData>
            {!tinURL && (
              <FormUploadContentService
                name='tin'
                type='pdf'
                className='h-48'
                restServiceHook={useDirectUploadContent}
                restData={{ fileType: 'SELLER_DOCUMENT' }}
              />
            )}
            {tinURL && (
              <PDFPreview
                url={tinURL}
                className='h-48'
                onRemove={() => setTINURL(null)}
              />
            )}
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>Trade License</TableHead>
          <TableData>
            {!tradeLicenseURL && (
              <FormUploadContentService
                name='tradeLicense'
                type='pdf'
                className='h-48'
                restServiceHook={useDirectUploadContent}
                restData={{ fileType: 'SELLER_DOCUMENT' }}
              />
            )}
            {tradeLicenseURL && (
              <PDFPreview
                url={tradeLicenseURL}
                className='h-48'
                onRemove={() => setTradeLicenseURL(null)}
              />
            )}
          </TableData>
        </TableRow>

        <TableRow>
          <TableHead>RJSC</TableHead>
          <TableData>
            {!rjscURL && (
              <FormUploadContentService
                name='rjsc'
                type='pdf'
                className='h-48'
                restServiceHook={useDirectUploadContent}
                restData={{ fileType: 'SELLER_DOCUMENT' }}
              />
            )}
            {rjscURL && (
              <PDFPreview
                url={rjscURL}
                className='h-48'
                onRemove={() => setRjscURL(null)}
              />
            )}
          </TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SellerEditBizDocForm;
