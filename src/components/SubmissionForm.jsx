import React, { useState } from 'react';
import { Save, Loader2, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const SubmissionForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        clinicalPopulation: 'DM',
        reviewType: 'Chart Review',
        targetIndicator: '',
        actualIndicator: '',
        improvementDimension: 'Prevention',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            // Logic to submit to Supabase
            // const { error } = await supabase.from('quality_records').insert([formData]);
            // if (error) throw error;

            // Simulate network delay for demo
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Form submitted:', formData);
            setSuccess(true);
            setFormData({
                title: '',
                clinicalPopulation: 'DM',
                reviewType: 'Chart Review',
                targetIndicator: '',
                actualIndicator: '',
                improvementDimension: 'Prevention',
                description: ''
            });
            // Reset success message after 3 seconds
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Check console for details.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">New Quality Record</h1>
                <p className="mt-2 text-gray-600">Submit a new clinical quality improvement record.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Record Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 py-3 px-4 bg-gray-50 border"
                        placeholder="e.g., Reduction of Waiting Time in OPD"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="clinicalPopulation" className="block text-sm font-medium text-gray-700">Clinical Population</label>
                        <select
                            name="clinicalPopulation"
                            id="clinicalPopulation"
                            value={formData.clinicalPopulation}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 py-3 px-4 bg-gray-50 border"
                        >
                            <option value="DM">Diabetes Mellitus (DM)</option>
                            <option value="HT">Hypertension (HT)</option>
                            <option value="Elderly">Elderly Care</option>
                            <option value="Pediatric">Pediatric</option>
                            <option value="Stroke">Stroke</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="reviewType" className="block text-sm font-medium text-gray-700">Review Type</label>
                        <select
                            name="reviewType"
                            id="reviewType"
                            value={formData.reviewType}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 py-3 px-4 bg-gray-50 border"
                        >
                            <option value="Chart Review">Chart Review</option>
                            <option value="Med Error">Medication Error</option>
                            <option value="RCA">Root Cause Analysis (RCA)</option>
                            <option value="Audit">Clinical Audit</option>
                            <option value="Innovation">Innovation Project</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="targetIndicator" className="block text-sm font-medium text-gray-700">Target Indicator</label>
                        <input
                            type="text"
                            name="targetIndicator"
                            id="targetIndicator"
                            value={formData.targetIndicator}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 py-3 px-4 bg-gray-50 border"
                            placeholder="e.g., < 30 mins"
                        />
                    </div>

                    <div>
                        <label htmlFor="actualIndicator" className="block text-sm font-medium text-gray-700">Actual Result</label>
                        <input
                            type="text"
                            name="actualIndicator"
                            id="actualIndicator"
                            value={formData.actualIndicator}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 py-3 px-4 bg-gray-50 border"
                            placeholder="e.g., 25 mins"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="improvementDimension" className="block text-sm font-medium text-gray-700">Improvement Dimension</label>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['Prevention', 'Promotion', 'Cure', 'Rehabilitation'].map((dim) => (
                            <label
                                key={dim}
                                className={`
                  cursor-pointer rounded-xl border px-3 py-2 text-sm font-medium text-center transition-all
                  ${formData.improvementDimension === dim
                                        ? 'bg-sage-100 border-sage-500 text-sage-700'
                                        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}
                `}
                            >
                                <input
                                    type="radio"
                                    name="improvementDimension"
                                    value={dim}
                                    checked={formData.improvementDimension === dim}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                {dim}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description / Key Learnings</label>
                    <textarea
                        name="description"
                        id="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 py-3 px-4 bg-gray-50 border"
                        placeholder="Brief details about the intervention and outcome..."
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-sage-500 hover:bg-sage-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500 disabled:opacity-70 transition-colors"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                Saving...
                            </>
                        ) : success ? (
                            <>
                                <CheckCircle className="-ml-1 mr-2 h-5 w-5" />
                                Saved Successfully
                            </>
                        ) : (
                            <>
                                <Save className="-ml-1 mr-2 h-5 w-5" />
                                Submit Record
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SubmissionForm;
