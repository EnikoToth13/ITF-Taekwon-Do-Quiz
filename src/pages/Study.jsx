import React, { useState } from 'react';
import { patternsData, stancesData, VocabularyData, GupLevel } from '../data/tkdData';
import { Filter, BookOpen, Layers, MessageSquare, ExternalLink, Globe, Loader } from 'lucide-react';

export default function Study() {
  const [selectedGup, setSelectedGup] = useState('All');
  const [activeTab, setActiveTab] = useState('patterns');

  // API State Management (Fulfilling REST API requirement)
  const [wikiInfo, setWikiInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [activePatternId, setActivePatternId] = useState(null);

  const gupOptions = [
    'All',
    GupLevel.GUP_10,
    GupLevel.GUP_9,
    GupLevel.GUP_8,
    GupLevel.GUP_7,
    GupLevel.GUP_6,
    GupLevel.GUP_5,
    GupLevel.GUP_4,
    GupLevel.GUP_3,
    GupLevel.GUP_2,
    GupLevel.GUP_1,
  ];

  const getGupRank = (gupString) => {
    if (!gupString) return 99;
    if (gupString.includes("10th")) return 10;
    if (gupString.includes("9th")) return 9;
    if (gupString.includes("8th")) return 8;
    if (gupString.includes("7th")) return 7;
    if (gupString.includes("6th")) return 6;
    if (gupString.includes("5th")) return 5;
    if (gupString.includes("4th")) return 4;
    if (gupString.includes("3rd")) return 3;
    if (gupString.includes("2nd")) return 2;
    if (gupString.includes("1st")) return 1;
    return 99;
  };

  // REST API Integration Function using fetch & async/await
  const fetchWikiData = async (pattern) => {
    if (activePatternId === pattern.id && wikiInfo) {
      setActivePatternId(null);
      setWikiInfo(null);
      return;
    }

    setActivePatternId(pattern.id);
    setLoading(true);
    setApiError(null);

    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pattern.wikiTitle)}`,
        {
          headers: {
            'User-Agent': 'ITF-Taekwondo-Education-App/1.0 (educational project)',
          },
        }
      );
      
      if (!response.ok) {
        throw new Error('Could not fetch data from Wikipedia.');
      }
      
      const data = await response.json();
      setWikiInfo({
        extract: data.extract || 'No summary available.',
        url: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${pattern.wikiTitle}`,
        title: data.title || pattern.name,
        thumbnail: data.thumbnail?.source || null
      });
    } catch (err) {
      console.error(err);
      setApiError('Failed to load Wikipedia details. Please check the wikiTitle in tkdData.js.');
    } finally {
      setLoading(false);
    }
  };

  const filteredPatterns = patternsData.filter((pattern) => {
    if (selectedGup === 'All') return true;
    const itemRank = getGupRank(pattern.gup);
    const selectedRank = getGupRank(selectedGup);
    return itemRank >= selectedRank;
  });

  const filteredStances = stancesData.filter((stance) => {
    if (selectedGup === 'All') return true;
    const itemRank = getGupRank(stance.gup);
    const selectedRank = getGupRank(selectedGup);
    return itemRank >= selectedRank;
  });

  const filteredVocabulary = VocabularyData.filter((vocab) => {
    if (selectedGup === 'All') return true;
    const itemRank = getGupRank(vocab.gup);
    const selectedRank = getGupRank(selectedGup);
    return itemRank >= selectedRank;
  });

  return (
    <div className="container my-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold m-0">ITF Study Hub</h2>
          <p className="text-muted m-0">Review patterns, stances and vocabulary.</p>
        </div>

        <div className="btn-group" role="group">
          <button
            className={`btn ${activeTab === 'patterns' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveTab('patterns')}
          >
            <BookOpen size={18} className="me-1" /> Patterns
          </button>
          <button
            className={`btn ${activeTab === 'stances' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveTab('stances')}
          >
            <Layers size={18} className="me-1" /> Stances
          </button>
          <button
            className={`btn ${activeTab === 'vocabulary' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveTab('vocabulary')}
          >
            <MessageSquare size={18} className="me-1" /> Vocabulary
          </button>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <Filter size={18} />
            </span>
            <select
              className="form-select"
              value={selectedGup}
              onChange={(e) => setSelectedGup(e.target.value)}
            >
              {gupOptions.map((gup, index) => (
                <option key={index} value={gup}>
                  {gup}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {activeTab === 'patterns' && (
        <div className="row g-4">
          {filteredPatterns.length > 0 ? (
            filteredPatterns.map((pattern) => (
              <div key={pattern.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 d-flex flex-column">
                  <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                    <h5 className="card-title m-0 fw-bold">{pattern.name}</h5>
                    <span className="badge bg-primary">{pattern.movements} Moves</span>
                  </div>
                  <div className="card-body flex-grow-1">
                    <h6 className="card-subtitle mb-2 text-muted fw-bold">{pattern.gup}</h6>
                    <p className="card-text">
                      <strong>Diagram:</strong> {pattern.diagram}
                    </p>
                    <p className="card-text">
                      <strong>Meaning:</strong> {pattern.meaning}
                    </p>

                    {activePatternId === pattern.id && (
                      <div className="mt-3 p-3 bg-light rounded border">
                        {loading && (
                          <div className="text-center py-2 text-primary">
                            <Loader className="spinner-border spinner-border-sm me-2" />
                            Fetching historical details...
                          </div>
                        )}
                        {apiError && <small className="text-danger">{apiError}</small>}
                        {wikiInfo && !loading && (
                          <div>
                            <h6 className="fw-bold text-dark d-flex align-items-center gap-1">
                              <Globe size={16} className="text-primary" /> Historical Context ({wikiInfo.title})
                            </h6>
                            {wikiInfo.thumbnail && (
                              <img
                                src={wikiInfo.thumbnail}
                                alt={wikiInfo.title}
                                className="img-fluid rounded mb-2 mt-1"
                                style={{ maxHeight: '120px', objectFit: 'cover' }}
                              />
                            )}
                            <p className="small text-muted mb-2">{wikiInfo.extract}</p>
                            <a
                              href={wikiInfo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                            >
                              Read Full Wikipedia Article <ExternalLink size={14} />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="card-footer bg-white border-top-0 pt-0 pb-3">
                    <button
                      className="btn btn-sm btn-outline-secondary w-100 fw-bold"
                      onClick={() => fetchWikiData(pattern)}
                    >
                      {activePatternId === pattern.id ? 'Hide History' : 'Read More (History & Bio)'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No patterns match your filter criteria.</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'stances' && (
        <div className="row g-4">
          {filteredStances.length > 0 ? (
            filteredStances.map((stance, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-primary">{stance.name}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{stance.gup}</h6>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item px-0">
                        <strong>Weight:</strong> {stance.weightDistribution}
                      </li>
                      <li className="list-group-item px-0">
                        <strong>Length:</strong> {stance.length}
                      </li>
                      <li className="list-group-item px-0">
                        <strong>Width:</strong> {stance.width}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No stances match your filter criteria for this Gup.</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'vocabulary' && (
        <div className="row g-4">
          {filteredVocabulary.length > 0 ? (
            filteredVocabulary.map((vocab, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-success text-capitalize">{vocab.korean}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{vocab.gup}</h6>
                    <p className="card-text mt-2">
                      <strong>Meaning:</strong> {vocab.english}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No vocabulary terms match your filter criteria for this Gup.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}